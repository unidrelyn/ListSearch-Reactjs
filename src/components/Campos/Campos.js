import React from 'react';
import './Campos.css';

class Campo extends React.Component { 
    constructor(props){
        super(props);

        this.state = {
            name:'Nombre',
            zone:'Zona'
        };

        this.updateName = this.updateName.bind(this);
        this.updateZone = this.updateZone.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    updateName(event) { 
        this.setState({ name: event.target.value}); //coloca el nombre que busca
        
    }

    updateZone(event) { 
        this.setState({ zone: event.target.value}); //coloca la zona que busca
    }

    handleSearch (event){
        this.props.message(this.state.name, this.state.zone);
        event.preventDefault();
    }

    render() {
        return (
            <div className="">
                <div className="fields">
                    <input onChange={this.updateName} placeholder={this.state.name} />
                    <input onChange={this.updateZone} placeholder={this.state.zone} />
                </div>  
                <div className="submit">
                    <a onClick={this.handleSearch}>Buscar Aves</a>
                </div>
            </div>
        );
    }
}

export default Campo;