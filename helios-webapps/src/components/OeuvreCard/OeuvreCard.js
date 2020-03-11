import React, { Component } from 'react';
import { Card } from 'antd';


class OeuvreCard extends Component {
        render() {
            const {author, creation, name, video} = this.props.artworkItem;
            return (
                <Card style={{"backgroundColor": "#edeaea", width: 230, margin: "15px", "border-radius": "10px", textAlign:"center"}}>
                    <p style={{marginBottom: 0}}>{name}</p>
                    <p style={{marginBottom: 0}}>{author}</p>
                    <p style={{marginBottom: 0}}>{creation}</p>
                </Card>
            );
        }
}

export default OeuvreCard;
