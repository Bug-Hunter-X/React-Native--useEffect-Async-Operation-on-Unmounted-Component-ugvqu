import React, { useState, useEffect } from 'react';

const DataFetching = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      if (isMounted) {
        setData(jsonData);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setIsMounted(false);
    };
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {/* Render data here */}
    </View>
  );
};

export default DataFetching;