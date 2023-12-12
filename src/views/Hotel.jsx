import React, { useEffect, useState } from "react";

const Hotel = () => {
  const [shop, setShop] = useState();
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    var myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjVBOUJBNUNENTM5MzQ3NTI4QUM4MjBBOTVGMjgzQTU2NEUzNDFFNjkiLCJ4NXQiOiJXcHVselZPVFIxS0t5Q0NwWHlnNlZrNDBIbWsiLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJmYWVkNGE5My03MWRhLTQwZjQtYWQyNC0xYzM5Zjk0N2RkMDUiLCJuYW1lIjoiQUhCVUFUIE9BdXRoIiwicm9sZSI6Il9fYWRtaW5pc3RyYXRvciIsIm9pX3Byc3QiOiJmYWVkNGE5My03MWRhLTQwZjQtYWQyNC0xYzM5Zjk0N2RkMDUiLCJjbGllbnRfaWQiOiJmYWVkNGE5My03MWRhLTQwZjQtYWQyNC0xYzM5Zjk0N2RkMDUiLCJvaV90a25faWQiOiI5YzFmMjJhZi1jMjBmLTQ4ZDItODk0Ni00Njc5Yzk3OTg4ZjkiLCJhdWQiOiJyZXNvdXJjZV9zZXJ2ZXIiLCJleHAiOjE3MDI0NDg3MDMsImlzcyI6Imh0dHBzOi8vc2hvcGdhdGV3YXl1YXQuZ2lpZnQuY29tLyIsImlhdCI6MTcwMjM2MjM2M30.X2RuJdgiyZeEUM1xvA36u5-rxqhW0uWZtjSwdC0vuvMzstShfRn8InTegK3zr02UpyIGdW_w3ctazfd9ApjtCXAut9Ruh7P9KD6DZ0h3JWAkJfJ_WejDLlyK141nL1ymSq3hEVuWRdOfEiH6C6asbjRGhZRs8Tf7Z-fl5TXSCJ05bZ9TQ3k8064KNaXB6t-2uM2D9g3e7RkZZX2MM7cHMChYgnVAQiNmVpyF4xTyhBJVhSnszpT2z3ksMJ6HHK4wfqPSDNOFapwSlAdI_HcW9Tt6NCx8CtfPb6acYqKanyIXtoQfLDi78JMoldx5d3v7Q0xqUeeVAH2ueh2I6ajR_iB_XkvRML6J8a58-cgKj6xL6MKc4hmSxbfTtdPI3KuWUctYOBprbYX6hNT2IXUYfWr_WPOYuBbKt2WLxWONOdZ9r4n0IRI2Pg9sJeYIicwbY7sSyxwZmAXXsVKwsGq9LJscBl0LNeF40N0qLpoPthXqIMG70LBHXMIZFynxmFnoHBt1bZBzcwIZMxaoitl6dF94NGRdm9tDMMheCXRjiP96bgK6u54g8fYFVUWbuPBxifAIzN2Agf0YoCPfCtqHOza9h4n9nlQNMRcoDbYnchk_y5pMh9GctHSg4HCX7sL1Ntm0xElfMogcOS-oO_eDdK4mboSiV7tkzgDCmDH7aB4"
    );

    var raw = {
      StoreId: "QIBMKT",
      CatalogId: "164d5545-22f3-472c-8a24-14d2b3be6300",
      CategoryId: null,
      CategoryIds: null,
      ResponseGroup: 16383,
      Outline: "94eba8bd-0609-448d-b862-0a2730f163e0",
      Currency: "QAR",
      PriceRange: null,
      LanguageCode: "en-US",
      SearchPhrase: "",
      SortSearchPhaseResponse: false,
      Terms: [],
      Sort: "",
      Skip: 0,
      Take: 15,
      IncludeAggregations: null,
      ExcludeAggregations: null,
      Latitude: null,
      Longitude: null,
      Distance: 0.0,
      GeoLocationPropertyName: null,
    };

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: "follow",
    };
    let data = await fetch(
      "https://shopgatewayapi.giift.com:8081/api/StoreFront/SearchProducts",
      requestOptions
    );
    let response = await data.json();
    console.log(response);
  };
  return <div>Hotel</div>;
};

export default Hotel;
