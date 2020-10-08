import React from "react";
import Grid from "../template/grid";
import IconButton from '../template/IconButton';

export default (props) => {
  return (
    <div role="form" className="todoForm" style={{ display: "flex" }}>
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onChange={props.handleChange}
          value={props.description}></input>
      </Grid>
      <Grid cols="12 3 2">
          <IconButton style="primary" icon='plus'
            onClick={props.handleAdd}></IconButton>
      </Grid>
    </div>
  );
};
