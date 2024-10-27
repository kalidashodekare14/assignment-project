import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({ removeCount, count }) => {

    const [active, setActive] = useState(1)
    const [data, setData] = useState([])
    const [playerCount, setPlayerCount] = useState(0)
    const [selectedData, setSelectedData] = useState([])

    console.log(selectedData)
    console.log(data)

    const handleFirstButton = () => {
        setActive(1)
    }

    const handleSecountButton = () => {
        setActive(2)
    }

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])


    const handleSelectedData = (player) => {
        if (count < player.biddingPrice) {
            return toast.error("You are low on coins.");
        }

        const checkCard = selectedData.some(check => check.playerId === player.playerId)
        if (checkCard) {
            return toast.error("Player Already Added");
        }

        setPlayerCount(playerCount + 1)
        setSelectedData((prevData => [...prevData, player]))
        removeCount(player.biddingPrice)
        toast.success("Player Successfuly Added");

    }

    const handleRemoveData = (id) => {
        const updateData = selectedData.filter(item => item.playerId !== id)
        setSelectedData(updateData)
    }


    const handleMoreButton = () => {
        setActive(1)
    }


    return (
        <div>
            <div className='flex justify-between items-center my-5 '>
                <h1 className='text-2xl'>Available Players</h1>
                <div className='flex items-center gap-3'>
                    <button onClick={handleFirstButton} className={`btn ${active === 1 && "bg-yellow-300"}`}>Available</button>
                    <button onClick={handleSecountButton} className={`btn ${active === 2 && "bg-yellow-300"}`}>Selected {selectedData.length}</button>
                </div>
            </div>
            <div className={`h-[400px] ${active === 1 ? "visible" : 'hidden'}`}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {data.map(player => (
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>Price: {player.biddingPrice}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleSelectedData(player)} className="btn btn-primary">Choose Player</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`h-[400px] ${active === 2 ? "visible" : 'hidden'}`}>
                <div className='space-y-2'>
                    {
                        selectedData.map(select => (
                            <div className='border p-5 flex justify-between items-center'>
                                <div>
                                    <img src={select.image} alt="" />
                                    <div>
                                        <h1 className='text-xl font-bold'>{select.name}</h1>
                                        <h1>{select.battingType}</h1>
                                    </div>
                                </div>
                                <MdDelete onClick={() => handleRemoveData(select.playerId)} className='text-2xl text-red-500' />
                            </div>
                        ))
                    }
                </div>
                <button onClick={handleMoreButton} className={`mt-5 btn bg-yellow-300 tex-black ${selectedData.length === 0 && 'hidden'}`}>Add More Player</button>
            </div>
        </div>
    );
};

export default Main;