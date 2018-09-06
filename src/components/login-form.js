import React from 'react';
import {Field, reduxForm, focus, Form} from 'redux-form';
import {Link} from 'react-router-dom';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }   

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div>
                <div className="info">
                    <h1>"Travel with 'Karpul' and help reduce Global Warming"</h1>
                    <h2>Search by 'Destination', 'Arrival Time' or 'Miles from destination'</h2>
                    <h3>Know your carpool members from their profile</h3>
                    <h4>Send a request to the 'Host' to join the 'Karpul'</h4>
                </div>
                <Form
                    className="login-form"
                    aria-live="polite"
                    aria-atomic="true"
                    role="complementary"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}> 
                    <h2>Sign In</h2>               
                    {error}                
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        label="Username"
                        id="username"
                        aria-label="Username"
                        aria-required="true"
                        validate={[required, nonEmpty]}
                        autoFocus
                    />
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        label="Password"
                        aria-label="Password"
                        aria-required="true"
                        validate={[required, nonEmpty]}
                    />
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                    <br />
                    <br />
                    or
                    <Link to="/register" className="register-link"><h2 className="register-text">Don't have an account??</h2></Link>                                
                </Form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
