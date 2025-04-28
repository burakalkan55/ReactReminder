import React from 'react';
import { Provider } from 'react-redux'; // REDUX PROVIDER İMPORT!
import reduxStore from './components/reduxStore'; // STORE İMPORT!
import UseStateHook from './components/usestatehook';
import UseEffectHook from './components/useEffectHook';
import PropsWrapper from './components/propsData';
import EventHandlingHook from './components/eventHandlingHook';
import ConditionalRenderingHook from './components/conditionalRenderingHook';
import ZustandCounterHook from './components/zustandCounterHook';
import ReduxCounterHook from './components/reduxCounterHook';
import ReactHookFormExample from './components/reactHookFormExample';
import CustomHookExample from './components/customHookExample';
import DataTableExample from './components/dataTableExample';
import ModalExample from './components/modal';
import SnackbarExample from './components/snackbar';
import DarkModeExample from './components/darkMode';

function App() {
  return (
    <Provider store={reduxStore}> {/* PROVIDER BURAYA GELİR */}
      <div>
        {/* 
        <UseEffectHook/>
        <UseStateHook/>
        <PropsWrapper/>
        <EventHandlingHook/>
        <ConditionalRenderingHook/>
        <ZustandCounterHook/>
        <ReduxCounterHook />
         <ReactHookFormExample/>
          <CustomHookExample/>
          <DataTableExample/>
          <ModalExample/>
       <SnackbarExample/>

        */}

        
       <DarkModeExample/>
      </div>
    </Provider>
  );
}

export default App;
