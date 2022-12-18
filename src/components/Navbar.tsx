import NavPill from './NavPill';

export default function Navbar() {
    return (
        <div className="header">
            <ul className="nav nav-pills" style={{ float: 'right' }}>
                <NavPill name="Status" page="/status" />
                <NavPill name="Calibrate" page="/calibrate" />
                <NavPill name="Sleep" page="/sleep" />
            </ul>
            <h3 className="text-muted">silvia</h3>
        </div>
    );
}
