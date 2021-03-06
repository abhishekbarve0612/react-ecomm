import React from 'react';
import MenuItem from './MenuItem';
import '../Styles/Directory.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5
                }
              ]
        }
    }
    render() {
        const { sections } = this.state;
        return (
            <div className="directory-menu">
                {
                    sections.map(({title, id, imageUrl, size}) => <MenuItem key={id} title={title} imgUrl={imageUrl} size={size} />)
                }
            </div>
        );
    }
};

export default Directory;