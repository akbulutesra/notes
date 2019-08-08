import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Kutu from './kutu/kutu';


class Kutucuklar extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);


        this.state = {
            notlar: [
                "bugun kahve ictim",
                "bugun cikolata yedim",
                "ugur",
                "esra",
            ],
            text : 'yeni not',
        }
    }

    handleSubmit(event) {
        this.setState({
            notlar:[...this.state.notlar, this.state.text]
          });
      }

      handleChange(event) {
        this.setState({text: event.target.value});
      }

    render() {

        const items = this.state.notlar.map((item) =>
            <Kutu note={item} />
        );

        return (
            <Aux>
                {items}

                    <label>
                        Not:
                    </label>
                    <input type="text" name="name" value={this.state.text} onChange={this.handleChange}/>

                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </Aux>


        );
    }
}

export default Kutucuklar;