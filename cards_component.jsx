import React from "react";
import Card from "./card";

const Cards_holder = () => {
    return (
        <div className="Cards_holder">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Card workout = 'Hip Thrusts' src = 'community_board\src\hip_thrust.jpg'></Card>
                        </td>
                        <td>
                            <Card></Card>
                        </td>
                        <td>
                            <Card></Card>
                        </td>
                    </tr>  
                    <tr>
                        <td>
                            <Card></Card>
                        </td>
                        <td>
                            <Card></Card>
                        </td>
                        <td>
                            <Card></Card>
                        </td>
                    </tr>  
                    <tr>
                        <td>
                            <Card></Card>
                        </td>
                        <td>
                            <Card></Card>
                        </td>
                        <td>
                            <Card></Card>
                        </td>
                    </tr>  
                    <tr>
                        <td>
                            <Card></Card>
                        </td>
                        <td>
                            <Card></Card>
                        </td>

                    </tr>              
                </tbody>
            </table>
        </div>
    )
}

export default Cards_holder;