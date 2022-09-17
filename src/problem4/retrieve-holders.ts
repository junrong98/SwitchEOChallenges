import {ethers} from "ethers";
import { formatUnits } from "ethers/lib/utils";

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");

// To Get
const lookupArr = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430", "0x0020c5222a24e4a96b720c06b803fb8d34adc0af", "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"];

// Swtch related
const swtchAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const swtchABI = [
    "function balanceOf(address account) external view returns (uint256)",
    "function decimals() public view returns (uint8)"
]

const swtchContract = new ethers.Contract(swtchAddress, swtchABI, provider);

async function main() {
    for (let i = 0; i < lookupArr.length; i++) {
        const balance = await swtchContract.balanceOf(lookupArr[i]);
        const decimals = await swtchContract.decimals();
        console.log("%s %s", lookupArr[i], formatUnits(balance, decimals));
    }
}

main();