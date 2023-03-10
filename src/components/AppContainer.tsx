type Props = {
    children: React.ReactNode
};

export default function AppContainer({ children }: Props) {
    return (
        <div className="container">
            <div className="wrap">
                {children}
            </div>
        </div>
    );
}