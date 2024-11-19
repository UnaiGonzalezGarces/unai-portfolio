import PropTypes from 'prop-types';

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes,
  download,
}) => {
  if (download) {
    return (
      <a
        href=''
        download={download}
        target={target}
        className={'btn btn-primary ' + classes}
      >
        {label}

        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else if (href) {
    return (
      <a href={href} target={target} className={'btn btn-primary ' + classes}>
        {label}

        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-primary ' + classes}>
        {label}

        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.string,
};

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes,
  download,
}) => {
  if (download) {
    return (
      <a
        href=''
        target={target}
        className={'btn btn-outline ' + classes}
        download={download}
      >
        {label}

        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else if (href) {
    return (
      <a href={href} target={target} className={'btn btn-outline ' + classes}>
        {label}

        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-outline ' + classes}>
        {label}

        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
