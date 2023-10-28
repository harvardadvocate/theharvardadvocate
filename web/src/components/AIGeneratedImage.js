import React, { useEffect, useState } from "react";
import axios from 'axios';
import default_img from '../assets/images/loading.jpg';
import LoadingRing from './LoadingRing';

const AIGeneratedImage = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const API_KEY = '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'; 
  const rawText = props.content.map((block) =>
        block.children.map((child) => child.text).join('')
    ).join(' ').substring(0, 3000);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    model: "gpt-3.5-turbo-instruct",
                    prompt: `Summarize ${rawText}`,
                    max_tokens: 150,
                    n: 1,
                },
                {
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`,
                    },
                }
            );
            const prompt = response['data']['choices'][0]['text'];
            const image = await axios.post(
                "https://api.openai.com/v1/images/generations",
                {
                    prompt: `Minimal sketch (black,white) or handdrawn illustration without words of:"${prompt}"`,
                    n: 1,
                    size: "1024x1024",
                },
                {
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`,
                    },
                }
            );
            setImageUrl(image['data']['data'][0]['url']);
        } catch (error) {
          console.error("Error calling OpenAI API:", error);
        }
      }
      setTimeout(() => { fetchData(); }, 2000);
  }, [props.content]);

  return (
    <div style={{marginBottom: 15}}>
      {imageUrl ? <img src={imageUrl || default_img} alt="Generated Image" /> : 
      <div>
        <img src={default_img} alt="Generating Image" />
        <LoadingRing/>
      </div>
      }
    </div>
  );
};

export default AIGeneratedImage;