"use client";

import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherSearch } from "@/actions/actions";
import { useState } from "react";
import { WeatherData } from "@/types/weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWeather(null);

    const result = await WeatherSearch(city);
    if (result.error) {
      setError(result.error);
    } else if (result.data) {
      setWeather(result.data);
    }
    setLoading(false);
  };

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{ backgroundColor: "#4d91f6" }}
    >
      {/* Card Input */}
      <Card className="p-4 shadow mb-4" style={{ width: "400px" }}>
        <Card.Body>
          <h4 className="text-center mb-4">Input City Name</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="JAKARTA"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="text-uppercase text-center"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={loading}
              className="w-100 fw-bold"
            >
              {loading ? "Searching..." : "Get Weather"}
            </Button>
          </Form>

          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Card.Body>
      </Card>

      {/* Card Weather Result */}
      {weather && (
        <Card className="p-4 shadow" style={{ width: "400px" }}>
          <Card.Body>
            <h3 className="mb-1">{weather.name}</h3>

            <h5 className="text-secondary">{weather.weather[0].main}</h5>

            <p className="mt-3 mb-1">
              <strong>Temperature:</strong> {weather.main.temp}°C
            </p>
            <p className="mb-1">
              <strong>Feels Like:</strong> {weather.main.feels_like}°C
            </p>
            <p className="mb-1">
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
            <p className="mb-1">
              <strong>Wind Speed:</strong> {weather.wind.speed} m/s
            </p>
            <p className="mb-3">
              <strong>Description:</strong> {weather.weather[0].description}
            </p>

            {/* Weather Icon */}
            <div className="text-start">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather icon"
              />
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
