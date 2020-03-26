import React, { Component } from "react";
import './UserCard.css'

class UserCard extends Component {
    state = {
       userArray: []
    }



    async get() {
        const response = await fetch('https://randomuser.me/api/?results=10')
        const data = await response.json();
        return data;
    }
    async componentDidMount() {
        try {
            const users = await this.get();
            const userArray = users.results.map(user => {
                return {
                    userName: user.name.first + ' ' + user.name.last,
                    userImage: user.picture.large,
                    contact: user.email
                }
            })
            this.setState({
                userArray: userArray
            })
        } catch (error) {
            this.setState({
                userArray: [error.message]
            })
        }
    }

    render() {
        const { userArray } = this.state;
        return (
            <div className='cards'>
                {userArray.map(user =>

                    <section className="cards">
                        
                        <img className='userPhoto' src={user.userImage} 
                        alt='randompic'></img>
                            <p className="userInfo">{user.userName} </p>
                            <p className="userContact">{user.contact}</p>
                    </section>
                )}
            </div>
        );
    }

    
}

export default UserCard