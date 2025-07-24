import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = "https://api.collection.cooperhewitt.org/rest/";
  const API_TOKEN = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}?method=cooperhewitt.objects.getInfo&access_token=${API_TOKEN}&object_id=${id}`
        );
        const data = await res.json();
        if (!data.object) throw new Error("Item not found");
        setItem(data.object);
      } catch (err) {
        setError(err.message || "Failed to fetch item");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Loading item...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <p><strong>Date:</strong> {item.date}</p>
      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Description:</strong> {item.description || "No description available."}</p>
      <p><strong>Credit:</strong> {item.creditline}</p>
      <Link to="/">← Back to Dashboard</Link>
    </div>
  );
};

export default ItemDetail;
