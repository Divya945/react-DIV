import Apidata from '../Fetchingapidata/Apidata';
import Asycdatafetch from '../Fetchingapidata/Asycdatafetch';
import Showalert from '../Fetchingapidata/Showalert';
import Addtwonumbers from '../Fetchingapidata/Addtwonumbers';
import Counter from '../Fetchingapidata/Counter';
import Passingvaluestochild from '../Fetchingapidata/Passingvaluestochild';
import ToDoHeader from '../ToDo/ToDoHeader';
import FizzBuzz from '../Fetchingapidata/FizzBuzz';
import CallchildtoParent from '../Callchildmethodfromparent/CallchildtoParent';
import CallchildtoParentRef from '../Callchildmethodfromparent/CallchildtoParentRef';
import '../App.css';
const WebDesign = () => {
  return (
    <>
      <div className="container-page">
        <h2>Web design content</h2>
        <Apidata />
        <Asycdatafetch />
        <Showalert />
        <Addtwonumbers />
        <Counter />
        <Passingvaluestochild />
        <ToDoHeader />
        <FizzBuzz />
        <CallchildtoParent />
        <CallchildtoParentRef />
      </div>
    </>
  );
};

export default WebDesign;
