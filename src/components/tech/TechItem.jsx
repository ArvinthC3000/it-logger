import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTechs } from '../../actions/techAction';
import M from 'materialize-css/dist/js/materialize.min';

const TechItem = ({ tech: { firstName, lastName, id }, deleteTechs }) => {
  const onDelete = () => {
    deleteTechs(id);
    M.toast({ html: 'Technician deleted' });
  };
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechs: PropTypes.func.isRequired,
};

export default connect(null, { deleteTechs })(TechItem);
