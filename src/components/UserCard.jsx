import React, { Component } from "react";
import './UserCard.css'
import Card from 'react-bootstrap/Card'

class UserCard extends Component {
    state = {
        userArray: []
    }



    async get() {
        const response = await fetch('https://randomuser.me/api/?results=5')
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
            <Card style={{ width: '15em' }}>
                {userArray.map(user =>

                    <section>

                        <Card.Img variant="top"className='userPhoto' src={user.userImage}
                            alt='randompic'/>
                        <Card.Body>
                        <Card.Text>
                            <p className="userInfo">{user.userName} </p>
                            <p className="userContact">{user.contact}</p>
                            </Card.Text>
                        </Card.Body>
                    </section>
                )}

            </Card>
        );
    }


}

export default UserCard