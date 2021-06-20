import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techAction';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);

  //   if (loading) return <Preloader />;
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technicians List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propType = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
