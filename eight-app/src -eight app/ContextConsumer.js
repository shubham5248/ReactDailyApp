import React,{Component} from "react";
import ContextConsumerChild from "./ContextConsumerChild";
import { PersonConsumer } from "./PersonContext";
export default class ContextConsumer extends Component{
    render(){
        return(
            <>
            <h1>In Context Consumer</h1>
             <PersonConsumer>
                {(value)=>{
                    return(
                        <h2>
                            the latest value in context is {value.name} and age is {value.age}
                        </h2>
                    );

                }}
            </PersonConsumer>
            <ContextConsumerChild/>
            </>
        )
    }
}