import React, { useState } from "react";

const Dashboard = () => {
    const [deposit, setDeposit] = useState(0);
    const [withdraw, setWithdraw] = useState(0);
    const [balance, setBalance] = useState(1240);

    const handleDeposit = () => {
        const amount = parseFloat(document.getElementById("deposit-field").value);
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount!");
            return;
        }
        setDeposit(deposit + amount);
        setBalance(balance + amount);
        document.getElementById("deposit-field").value = ""; 
    };

    const handleWithdraw = () => {
        const amount = parseFloat(document.getElementById("withdraw-field").value);
        if (isNaN(amount) || amount <= 0 || amount > balance) {
            alert("Invalid amount or insufficient balance!");
            return;
        }
        setWithdraw(withdraw + amount);
        setBalance(balance - amount);
        document.getElementById("withdraw-field").value = ""; 
    };

    return (
    <main>
        <section className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full sm:w-10/12 md:w-9/12 mx-auto text-white">
                    <div className="bg-emerald-500 p-8 rounded-xl">
                        <h4 className="text-2xl">Deposit</h4>
                        <h2 className="text-3xl sm:text-5xl">$<span>{deposit}</span></h2>
                    </div>
                    <div className="bg-red-500 p-8 rounded-xl">
                        <h4 className="text-2xl">Withdraw</h4>
                        <h2 className="text-3xl sm:text-5xl">$<span>{withdraw}</span></h2>
                    </div>
                    <div className="bg-yellow-500 p-8 rounded-xl">
                        <h4 className="text-2xl">Balance</h4>
                        <h2 className="text-3xl sm:text-5xl">$<span>{balance}</span></h2>
                    </div>
                </div>
            </section>

        <section className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-10/12 md:w-9/12 mx-auto">
                    {/* Deposit Section */}
                    <div className="bg-purple-500 p-8 rounded-xl shadow-lg">
                        <h4 className="text-xl sm:text-2xl mb-4 text-white font-semibold">Please Deposit</h4>
                        <input id="deposit-field" className="w-full sm:w-9/12 block mb-2 px-3 py-2 rounded-lg text-gray-700"
                            type="text" placeholder="$ Amount you want to deposit" />
                        <button onClick={handleDeposit} 
                            className="bg-amber-600 text-white px-8 py-2 font-medium rounded-lg transition-colors duration-200">
                            Deposit
                        </button>
                    </div>

        <div className="bg-teal-500 p-8 rounded-xl shadow-lg">
                        <h4 className="text-xl sm:text-2xl mb-4 text-white font-semibold">Please Withdraw</h4>
                        <input id="withdraw-field" className="w-full sm:w-9/12 block mb-2 px-3 py-2 rounded-lg text-gray-700"
                            type="text" placeholder="$ Amount you want to withdraw" />
                        <button onClick={handleWithdraw} 
                            className="bg-amber-600 text-white px-8 py-2 font-medium rounded-lg transition-colors duration-200">
                            Withdraw
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
