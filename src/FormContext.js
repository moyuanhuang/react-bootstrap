import React from 'react';
import transformContext from '@restart/context/transformContext';

const FormContext = React.createContext({ controlId: undefined });

FormContext.Transform = transformContext(FormContext);

export default FormContext;
