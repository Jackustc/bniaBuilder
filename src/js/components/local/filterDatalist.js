import React, {Component} from 'react';
import {clean} from 'js/utils/utils';

// Name : Textbox Dropdown
// Purpose : Display in the left hand drawer
// Input : field.preloadfilter, layer, suggestions
// Output : Event : inputChange, Display : 'textboxdropdown'

export class Datalist extends Component {
  displayName: 'Datalist';
  constructor(props) {
    super(props);
    this.state = {
      fieldName : '',
      suggestions : []
    }
  }

  //  Updater
  componentDidMount(){ this.updateField( this.props ) }
  componentWillReceiveProps(nextProps){ this.updateField( nextProps ) }

  // Prepare the data
  updateField( props ){
    let { layer, field, fieldName, suggestions } = props;
    if(typeof(suggestions)=='undefined'){ suggestions=[] }
    suggestions = suggestions.map( (suggestion, i) => { return <option key={i} value={suggestion}> {suggestion} </option> 
    } )
    this.setState({ suggestions } )
  }

  // Now render it
  render () {
    let { suggestions } = this.state;
    let { inputChange, fieldName, layer} = this.props;
        
    return [
        <input key='1' list={fieldName} placeholder='Enter Text' onChange={inputChange}  autoComplete={'off'} data-field={fieldName} />,
        <datalist key='2' id={fieldName}> { suggestions } </datalist>
    ]
  }
}