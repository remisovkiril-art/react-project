import { Component } from "react";
type Props = {
    fullName: string;
    phone: string;
    email: string;
    city: string;
    skills: string;
    photo: string;
};
class Person extends Component<Props> {
    render() {
        return (
            <>
                <h2>{this.props.fullName}</h2>
                <p>Phone: {this.props.phone}</p>
                <p>Email: {this.props.email}</p>
                <p>City: {this.props.city}</p>
                <p>Skills: {this.props.skills}</p>
                <img src={this.props.photo} width="250" />
            </>
        );
    }
}
export default Person;