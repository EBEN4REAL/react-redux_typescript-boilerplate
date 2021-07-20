import * as React from 'react';

interface IState {
    count: number,
    inputNumber: string
}
class Description extends React.Component<{}, IState>{
    // public static defaultProps: Partial<IProps> = {
    //     countBy: 5,
    // };

     state: IState = {
        count: 0,
        inputNumber: "5"
    };

      increase = () => {
        const count = this.state.count + parseInt(this.state.inputNumber)
        this.setState({ count });
    };

     handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({
            inputNumber:  e.currentTarget.value
        })
    }

    public render() {
        return (
            <div>
                <p>My favorite number is {this.state.count}</p>
                <input type='number' value={this.state.inputNumber} onChange={(e) => this.handleChange(e)} />
                <button className = 'increase_btn' onClick={() => this.increase()}>Increase</button>
            </div>
        )
    }
}

export default Description;