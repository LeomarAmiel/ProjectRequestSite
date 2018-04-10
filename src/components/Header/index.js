import React from 'react';
import UserHeader from './userHeader';
import NonUserHeader from './nonuserHeader';
import { connect } from 'react-redux';

class Header extends React.Component {
    render () {
        console.log(this.props.auth);
        return (
            <div>
                {   this.props.auth.authenticated 
                    ?  <UserHeader/>
                    :  <NonUserHeader/>
                }
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth
});

export default connect(mapStateToProps)(Header);
