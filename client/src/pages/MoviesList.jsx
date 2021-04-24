import React, { Component } from 'react'
import ReactTable from 'react-table'
import apis from '../api'

import styled from 'styled-components'

// import 'react-table/react-table.css'
import 'react-table/index.js'
import Table from './Table.js'

const Wrapper = styled.div`
    padding: 0 60px 60px 60px;
`

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        const movies = await apis.getAllMovies();
        console.log(movies);
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
    }

    render() {
        const { movies, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', movies)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            // {
            //     Header: 'Time',
            //     accessor: 'time',
            //     // Cell: props => <span>{props.value.join(' / ')}</span>,
            // },
        ]

        let showTable = true
        if (!movies.length) {
            showTable = false
        }

        return (
            // <div>HEllo{ movies.map(el => <div><p>{el.name}</p><p>{ el.rating }</p><p>{ el.released_date }</p></div>)
                // }</div>
            // <Wrapper>
                // {showTable && (
                    // <ReactTable
                    //     data={movies}
                    //     columns={columns}
                    //     loading={isLoading}
                    //     defaultPageSize={10}
                    //     showPageSizeOptions={true}
                    //     minRows={0}
                    // />
                // )}
            // </Wrapper>
            <div className="container">
                <Table columns={columns} data={movies} />
            </div>
        )
    }
}

export default MoviesList