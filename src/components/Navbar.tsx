import NavPill from './NavPill';

export default function Navbar() {
    return (
        <div className="header">
            <ul className="nav nav-pills" style={{ float: 'right' }}>
                <NavPill name="Status" tab="status" defaultTab={true}/>
                <NavPill name="Calibrate" tab="calibrate" />
                <NavPill name="Sleep" tab="sleep" />
            </ul>
            <h3 className="text-muted">silvia</h3>
        </div>
    );
}
