import React from 'react';
import PropTypes from 'prop-types';

class SAlertContentTmpl extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.classNames} id={this.props.id} style={this.props.styles} onClick={this.props.handleClose}>
                <div className='s-alert-box-inner'>
                    {this.props.message}
                </div>
            </div>
        )
    }
}

SAlertContentTmpl.propTypes = {
    id: PropTypes.string.isRequired,
    classNames: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
    message: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    handleClose: PropTypes.func.isRequired,
    customFields: PropTypes.object
};

export default SAlertContentTmpl;
