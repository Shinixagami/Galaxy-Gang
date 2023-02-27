// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Meraki is ERC721, ERC721Enumerable, Pausable, Ownable {
    uint256 maxSupply = 100;  
    uint256 allowListMaxSupply = 2; //un-unsed

    //switches minting on 
    //allow editing for mints
    bool public publicMintOpen = false;    
    bool public allowListMintOpen = false;

    //allow parses mapping
    mapping(address => bool) public allowList;  //list 

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Meraki", "MRKI") {}


    //where our NFT images come from baseURI
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://Qmaa6TuP2s9pSKczHF4rwWhTKUdygrrDs8RmYYqCjP3Hye/";
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }


    //modify the mint windows
    function editMintWindows(
        bool _publicMintOpen,
        bool _allowListMintOpen
    ) external onlyOwner {
        publicMintOpen = _publicMintOpen;
        allowListMintOpen = _allowListMintOpen;
    }

    /* Payment Conversion */ 
    /* for test payment = for input on SMCRT*/ 
    /* 10000000 = 0.01 Eth */
    /* 80000000 = 0.08 Eth */
    /* 80000000 = 0.08 Eth */
    
    /* 
    Eth Price:
    0.08
    Matic Price: 
    88
    Cronos Price:
    1888
    */

    //add publicMint & allowListMintOpen Variables
    //require only allowList People to mint.
    function allowListMint() public payable {

        require(allowListMintOpen, "AllowList Mint Closed");

        require(allowList[msg.sender], "You are not on the allow list!");

         /* Payable here */  
        require(msg.value == 0.08 ether, "Not Enough Funds!");

        internalMint(); //counter

    }
     
    /* public mint */
    //add Payment DONE 
    //add limited supply DONE
    //add batch mints 

    function publicMint() public payable {
        
        require(publicMintOpen, "Public Mint Closed");

        /* Payable here */  
        require(msg.value == 0.08 ether, "Not Enough Funds!");

        internalMint(); //counter

    }

    function internalMint() internal {

        //total supply = how many NFTs minted so far
        require(totalSupply() <  maxSupply, "Max Supply Reached");


        //add internal mint !!
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
    }


    //populate allowList

    //add wallet address to allow list

    function setAllowList(address[] calldata addresses) external onlyOwner {

        for(uint256 i = 0; i < addresses.length; i++){
            allowList[addresses[i]] = true; 
        }

    }

    //have to test on test net -after
    function withdraw(address _addrs) external onlyOwner {

        //get balance of contract
        uint256 balance = address(this).balance;
        payable(_addrs).transfer(balance);

    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // The following functions are overrides required by Solidity.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }


}