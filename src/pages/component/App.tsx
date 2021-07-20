import * as React  from 'react';
import {useEffect} from 'react';
import './App.css';
import Header from '../../components/Header';
import Description from '../../components/Description';
import BodyWrapper from '../../components/BodyWrapper';

interface Iprops {
  handleCustomersList: (params: number | any) => void,
  result: {
    [key: string]: any
  }
}
const App:React.FC<Iprops> =(props: Iprops)=> {

  useEffect(() => {
    props.handleCustomersList(1)
  }, [props])

  console.log(props.result.title)
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <BodyWrapper>
        <Description />
      </BodyWrapper>
    </div>
  );
}

export default App;
