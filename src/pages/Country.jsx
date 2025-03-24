import React, { useState } from "react";
import { listCountries } from "@/store/countrySlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
function Country() {
  const dispatch = useDispatch();

  const { country, flag } = useSelector((state) => state.country);

  //const [flag, SetFlag] = useState(false);
  const [countryVal, SetCountryVal] = useState(null);

  const handleFind = () => {
    dispatch(listCountries(countryVal));
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Find Country Capital</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="d-flex">
            <Input
              placeholder="Enter Country Name"
              onChange={(event) => {
                SetCountryVal(event.target.value);
              }}
            />

            <Button
              onClick={handleFind}
              variant="destructive"
              className="mt-2 bg-black"
              size="sm"
            >
              Find
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          {flag && (
            <article>
              <img
                src={country?.flags?.svg}
                alt="flag"
                className="float-right"
                width="50"
                height="50"
              />
              <div className="w-60">
                <h3 className="mb-0">Country : {country?.name?.common} </h3>
                <span>Capital : {country?.capital} </span>
              </div>
            </article>
          )}
        </CardFooter>
      </Card>
    </>
  );
}

export default Country;
