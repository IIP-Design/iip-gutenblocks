import { bool, func, string } from 'prop-types';

import { convertUtcString } from '../../utils/time';

const { wp } = window;
const { __ } = wp.i18n;

const CountdownFrontend = ( {
  date, onClick, text, timezone, width,
} ) => (
  <div
    className="iip_countdown"
    onClick={ () => onClick() }
    onKeyUp={ () => onClick() }
    role="button"
    tabIndex={ 0 }
  >
    <input type="hidden" id="countdatetime" value={ `${date}${timezone.utcOffset}` } />
    <div id="clockwrap">
      <div id="clockdiv" style={ { width: `${width}px` } }>
        { ( text === 'true' ) && (
          <h1>{ convertUtcString( `${date}${timezone.utcOffset}`, 'en-US' ) }</h1>
        ) }
        <div>
          <span className="days" />
          <div className="smalltext">
            { __( 'Days', 'gpalab-gutenblocks' ) }
          </div>
        </div>
        <div>
          <span className="hours" />
          <div className="smalltext">
            { __( 'Hours', 'gpalab-gutenblocks' ) }
          </div>
        </div>
        <div>
          <span className="minutes" />
          <div className="smalltext">
            { __( 'Minutes', 'gpalab-gutenblocks' ) }
          </div>
        </div>
        <div>
          <span className="seconds" />
          <div className="smalltext">
            { __( 'Seconds', 'gpalab-gutenblocks' ) }
          </div>
        </div>
      </div>
    </div>
  </div>
);

CountdownFrontend.propTypes = {
  date: string,
  onClick: func,
  text: bool,
  timezone: string,
  width: string,
};

export default CountdownFrontend;
