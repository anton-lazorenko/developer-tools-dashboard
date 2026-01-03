import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";

const UUIDGeneratorPage = lazy(() => import('./pages/UUIDGeneratorPage/UUIDGeneratorPage'));
const FakeAddressGeneratorPage = lazy(() => import('./pages/FakeAddressGeneratorPage/FakeAddressGeneratorPage'));
const PasswordGeneratorPage = lazy(() => import('./pages/PasswordGeneratorPage/PasswordGeneratorPage'));
const UsernameGeneratorPage = lazy(() => import('./pages/UsernameGeneratorPage/UsernameGeneratorPage'));
const RandomColorGeneratorPage = lazy(() => import('./pages/RandomColorGeneratorPage/RandomColorGeneratorPage'));

const Base64Page = lazy(() => import('./pages/Base64Page/Base64Page'));
const EncoderHTMLPage = lazy(() => import('./pages/EncoderHTMLPage/EncoderHTMLPage'));
const EncoderURLPage = lazy(() => import('./pages/EncoderURLPage/EncoderURLPage'));

const PngToWebConverterPage = lazy(() => import('./pages/PngToWebConverterPage/PngToWebConverterPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="generators">
              <Route path="uuid-generator" element={<UUIDGeneratorPage />} />
              <Route path="fake-address-generator" element={<FakeAddressGeneratorPage />} />
              <Route path="password-generator" element={<PasswordGeneratorPage />} />
              <Route path="username-generator" element={<UsernameGeneratorPage />} />
              <Route path="colors-generator" element={<RandomColorGeneratorPage />} />
            </Route>
            <Route path="encoders">
              <Route path="base-encoder" element={<Base64Page />} />
              <Route path="html-encoder" element={<EncoderHTMLPage />} />
              <Route path="url-encoder" element={<EncoderURLPage />} />
            </Route>
            <Route path="converters">
              <Route path="png-to-web" element={<PngToWebConverterPage />} />
            </Route>

            {/* <Route path="encoders" element={<EncodersPage />} />
              */}
          </Route>
        </Routes>
      </Suspense>

    </Router>

  );
}

export default App;
