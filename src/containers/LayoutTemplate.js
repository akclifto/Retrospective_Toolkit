import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({

    template: {
        minHeight: '100vh'
    }
}));

const LayoutTemplate = (props) => {
    const classes = useStyles();

        return (
            <div className={classes.template}>
                    <Header />
                        <div>
                            {props.children}
                        </div>
                    <Footer />          
            </div>
        );
}
LayoutTemplate.propTypes = {
    children: PropTypes.node
}

export default LayoutTemplate;