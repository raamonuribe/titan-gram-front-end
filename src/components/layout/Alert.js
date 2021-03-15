import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Alert = (props) => {
   if (props.alerts === null || props.length === 0) return null;

   const renderedAlerts = props.alerts.map((alert) => {
      return (
         <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            {alert.msg}
         </div>
      );
   });

   return <Fragment>{renderedAlerts}</Fragment>;
};

const mapStateToProps = (state) => {
   return {
      alerts: state.alert
   };
};

export default connect(mapStateToProps)(Alert);
