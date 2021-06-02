import React, { Component, useState } from "react";
import styled from "styled-components";
import api from "./../api";

const Row = styled.div.attrs({
  className: "row",
})``;

const Column = styled.div.attrs({
  className: "col-md-4",
})``;

const Form = styled.form.attrs({
  classname: "form",
})``;

const FormGroup = styled.div.attrs({
  className: "form-group",
})``;

const FormLabel = styled.div.attrs({
  className: "form-label",
})``;

const FormControl = styled.input.attrs({
  className: "form-control",
})``;

const FormCheck = styled.input.attrs({
  className: "form-check",
})``;

const Button = styled.button.attrs({
  className: "btn btn-primary",
})``;

class MoviesInsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      overview: "",
      poster: "",
      release_date: "",
      genres: [],
      categories: [
        { id: 1, value: "Action" },
        { id: 2, value: "Adventure" },
        { id: 3, value: "Sci-Fi" },
        { id: 4, value: "Comedy" },
      ],
    };
  }

  handleChangeInputTitle = async (event) => {
    const title = event.target.value;
    this.setState({ title });
  };

  handleChangeInputOverview = async (event) => {
    const overview = event.target.value;
    this.setState({ overview });
  };

  handleChangeInputPoster = async (event) => {
    const poster = event.target.value;
    this.setState({ poster });
  };

  handleChangeInputReleaseDate = async (event) => {
    const release_date = event.target.value;
    this.setState({ release_date });
  };

  handleChangeInputGenres = async (event) => {
    const checked = event.target.checked;
    const value = event.target.value;

    if (checked == true) {
      if (this.state.genres.length >= 3) {
        event.target.checked = false;
        window.alert("Only three genres allowed");
      } else {
        this.state.genres.push(value);
      }
    } else {
      const index = this.state.genres.indexOf(value);
      this.state.genres.splice(index, 1);
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, overview, poster, release_date, genres } = this.state;
    const payload = { title, overview, poster, release_date, genres };
    await api.insertMovie(payload).then((res) => {
      if (res.data.status === "success"){
        window.alert(`Movie inserted successfully`);
        console.log(res);
        this.setState({
          title: "",
          overview: "",
          poster: "",
          release_date: "",
          genres: [],
        });
        window.location = '/';
      } else {
        console.log(res);
        window.alert("Some Error Occured");
      }
    }).catch(err => { console.log(err); window.alert("ERROR")});
  };

  render() {
    return (
      <div className="container">
        <p>{this.state.name}</p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormLabel for="movietitle">
              <strong>Title:</strong>
            </FormLabel>
            <FormControl
              type="text"
              placeholder="Movie Name"
              id="movietitle"
              required
              onChange={this.handleChangeInputTitle}
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel for="overview">
              <strong>Overview:</strong>
            </FormLabel>
            <FormControl
              as="textarea"
              rows={3}
              placeholder="Movie Description"
              id="overview"
              required
              onChange={this.handleChangeInputOverview}
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel for="released_date">
              <strong>Released Date:</strong>
            </FormLabel>
            <FormControl
              type="date"
              id="released_date"
              required
              onChange={this.handleChangeInputReleaseDate}
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel for="poster">
              <strong>Poster:</strong>
            </FormLabel>
            <FormControl
              type="url"
              id="poster"
              placeholder="Enter url"
              required
              onChange={this.handleChangeInputPoster}
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>
              <strong>Genres:</strong>
            </FormLabel>
            <ol className="list-group">
              {this.state.categories.map((el) => (
                <li key={el.id} className="list-group-item">
                  <label>
                    <input
                      type="checkbox"
                      value={el.value}
                      onChange={this.handleChangeInputGenres}
                    />{" "}
                    {el.value}
                  </label>
                </li>
              ))}
            </ol>
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default MoviesInsert;
