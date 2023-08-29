import {createSlice} from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        boughtCards: [
            {
                id: 1,
                name: "START",
                price: 0,
                color: "gray",
            },
            {
                id: 2,
                name: "GRANADA",
                price: 60,
                color: "#503300",
            },
            {
                id: 3,
                name: "SEVILLE",
                price: 60,
                color: "#503300",
            },
            {
                id: 4,
                name: "MADRID",
                price: 80,
                color: "#503300",
            },
            {
                id: 5,
                name: "HONG KONG",
                price: 100,
                color: "#003d50",
            },
            {
                id: 6,
                name: "BEIJING",
                price: 100,
                color: "#003d50",
            },
            {
                id: 7,
                name: "SHANGHAI",
                price: 120,
                color: "#003d50",
            },
            {
                id: 8,
                name: "VENICE",
                price: 140,
                color: "#4d0050",
            },
            {
                id: 9,
                name: "MILAN",
                price: 140,
                color: "#4d0050",
            },
            {
                id: 10,
                name: "ROME",
                price: 160,
                color: "#4d0050",
            },
            {
                id: 11,
                name: "HAMBURG",
                price: 180,
                color: "#500000",
            },
            {
                id: 12,
                name: "BERLIN",
                price: 200,
                color: "#500000",
            },
            {
                id: 13,
                name: "CHICAGO",
                price: 220,
                color: "#504f00",
            },
            {
                id: 14,
                name: "LAS VEGAS",
                price: 240,
                color: "#504f00",
            },
            {
                id: 15,
                name: "LYON",
                price: 260,
                color: "#005001",
            },
            {
                id: 16,
                name: "PARIS",
                price: 280,
                color: "#005001",
            }
        ],
    },
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload
        }
    }
})

export const {getUsers} = playerSlice.actions

export default playerSlice.reducer;
