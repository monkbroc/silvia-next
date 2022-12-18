import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { wrapper } from '../store';

export default function App({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  console.log(Component);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}