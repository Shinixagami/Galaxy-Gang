// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract NFT is ERC721Enumerable, Ownable {
  using Strings for uint256;
     
  string baseURI; //return function
  string public baseExtension = ".json";


    address[5] public adminAddresses = [
        0x3B1cC85f65223544A807b43d164A0BCc99eF6623, //gabe chrome 
        0x6d98fb0308b99E3e7f89e91cF9565378aEbAc2E1  //gabe opera
    ]; 

    /* 20000000 = 0.02 Eth */
    /* 80000000 = 0.08 Eth */
    /* 80000000 = 0.08 Eth */

  uint256 public cost = 0.01 ether; //public mint cost 
  
  uint256 public whitelist_cost = 0.01 ether;

  uint256 public maxMintAmount = 3; //how many each person can mint 

  uint256 public totalMaxSupply = 6;  //total max supply of NFTs 

  uint256 public maxSupply = 2;  //this gets updated !!

  uint256 public nextBatchAddition = 2;  //how much each batch mints

   //allow editing for mints
   bool public publicMintOpen = false;      //setter editMintWindows()
   bool public allowListMintOpen = false;    //setter editMintWindows()

  bool public paused = false;
  bool public revealed = false;
  string public notRevealedUri;

  /* Important */
  string public _name = "Smart Mindz Test";
  string public _symbol = "SMDZ";
  string public _initBaseURI = "ipfs://QmP7nDqvMKSZopkQFndFGkSPgwDzJb4Nk6DfDVia4iNXab";   //Meta Data for Mint 
  string public _initNotRevealedUri = "ipfs://QmbqRtC4DkY7bdEp3D7jMoXSXwCNLmXPnG9dCea9HwMcGQ/hidden.json";  //Meta Data for before reveal (Hidden Meta Data)



  constructor() ERC721(_name, _symbol) {
    setBaseURI(_initBaseURI);
    setNotRevealedURI(_initNotRevealedUri);
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function publicMint(uint256 _mintAmount) public payable {

    uint256 supply = totalSupply();

    require(publicMintOpen, "Public Mint Closed");
    require(!paused);
    require(_mintAmount > 0);
    require(_mintAmount <= maxMintAmount,  "Public Mint Sold Out!");

    require(supply + _mintAmount <= maxSupply);

    if (msg.sender != owner()) {
      require(msg.value >= cost * _mintAmount);
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(msg.sender, supply + i);
    }
  }


    // whitelist
  function whitelistMint(uint256 _mintAmount) public payable {

    uint256 supply = totalSupply();

    require(allowListMintOpen, "AllowList Mint Closed");

    require(allowList[msg.sender], "You are not on the allow list!");

    require(!paused);
    require(_mintAmount > 0);
    require(_mintAmount <= maxMintAmount, "Whitelist Mint Sold Out!");

    require(supply + _mintAmount <= maxSupply);

    if (msg.sender != owner()) {
      require(msg.value >= cost * _mintAmount);
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(msg.sender, supply + i);
    }

  }


  //--------------------------------------------------- MERKLE TREE FOR WHITELIST

    bytes32 public root;

    function testWhitelistMint(uint256 _mintAmount, bytes32[] memory proof) public payable {

        uint256 supply = totalSupply();

        require(isValid(proof, keccak256(abi.encodePacked(msg.sender))), "Not a part of Allowlist");


        //same stuff DELETE
        //  uint256 tokenId = _tokenIdCounter.current();
        // _tokenIdCounter.increment();
        // _safeMint(to, tokenId);

        require(!paused);
        require(_mintAmount > 0);
        require(_mintAmount <= maxMintAmount, "Whitelist Mint Sold Out!");

        require(supply + _mintAmount <= maxSupply);

        if (msg.sender != owner()) {
        require(msg.value >= cost * _mintAmount);
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
        _safeMint(msg.sender, supply + i);
        }

    }


     function isValid(bytes32[] memory proof, bytes32 leaf) public view returns (bool) {
        return MerkleProof.verify(proof, root, leaf);
    }



//----- end of whitelist dev




   


   //function might be better with merkle tree
   /* allow list */

     //allow parses mapping
    mapping(address => bool) public allowList;  //list 

    function setAllowList(address[] calldata addresses) external onlyOwner {

        for(uint256 i = 0; i < addresses.length; i++){
            allowList[addresses[i]] = true; 
        }

    }


    //modify the mint windows
    function editMintWindows(
        bool _publicMintOpen,
        bool _allowListMintOpen
    ) external onlyOwner {
        publicMintOpen = _publicMintOpen;
        allowListMintOpen = _allowListMintOpen;
    }


  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );
    
    if(revealed == false) {
        return notRevealedUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }






      //only owner
    function reveal() public onlyOwner {
      revealed = true;
    }


    /* setter functions -------------------- */

    //important
    function setNextBatch() public onlyOwner {
        require(maxSupply < totalMaxSupply, "Total Max Supply Reached!!!");
        maxSupply = maxSupply + nextBatchAddition;
    }

   
   function setWalletPayout(
       uint256 _id, 
       address _payAddress
   ) public onlyOwner {
        adminAddresses[_id] = _payAddress;
   }


  //pretty useless after contract is launched
  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }

   //how much quantity each user can mint
  function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
  }
  
  function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
    notRevealedUri = _notRevealedURI;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }

  /* getter functions */
   function getAdminAddress(
        uint256 _id
   ) public view returns (address){
       return adminAddresses[_id];
   } 

    function howManyNftMinted(
    ) public view returns (uint256){
       return totalSupply();
    }

   function getMaxMint() public view returns (uint256){
       return maxSupply;
   }

 
  function withdrawPayments() public payable onlyOwner {
    // This will pay 5% shares.
    // =============================================================================
    (bool first, ) = payable(adminAddresses[0]).call{value: address(this).balance * 5 / 100}("");
    require(first);
    // =============================================================================

     // This will pay HashLips 5% shares.
    // =============================================================================
    (bool second, ) = payable(adminAddresses[1]).call{value: address(this).balance * 5 / 100}("");
    require(second);
    // =============================================================================

   
    // This will payout the owner 95% of the contract balance.
    // Do not remove this otherwise you will not be able to withdraw the funds.
    // =============================================================================
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
    // =============================================================================
  }
}