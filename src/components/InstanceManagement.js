import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  API: {
    endpoints: [
      {
        name: 'myAPI',
        endpoint: 'https://ffxg5cr7te.execute-api.us-east-2.amazonaws.com/prod',
        region: 'us-east-2'
      }
    ]
  }
};

Amplify.configure(amplifyConfig);

const InstanceManagement = () => {
  const [instances, setInstances] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchInstances = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        'https://ffxg5cr7te.execute-api.us-east-2.amazonaws.com/prod/instances',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      
      if (responseData.body) {
        const bodyData = typeof responseData.body === 'string' 
          ? JSON.parse(responseData.body) 
          : responseData.body;
        
        if (bodyData.data && Array.isArray(bodyData.data)) {
          setInstances(bodyData.data);
        } else {
          setError('データの形式が不正です');
        }
      } else {
        setError('レスポンスボディが空です');
      }
      
    } catch (err) {
      console.error('API Error:', err);
      setError(`APIエラー: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstances();
  }, []);

  // インスタンスの状態に応じた色を返す関数
  const getStateColor = (state) => {
    switch (state.toLowerCase()) {
      case 'running':
        return '#4CAF50';
      case 'stopped':
        return '#f44336';
      case 'pending':
        return '#ff9800';
      case 'stopping':
        return '#ff9800';
      default:
        return '#9e9e9e';
    }
  };

  // 日時をフォーマットする関数
  const formatDateTime = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div>
      <h2>インスタンス一覧</h2>
      <button 
        onClick={fetchInstances}
        disabled={loading}
        style={{
          margin: '10px',
          padding: '5px 10px',
          backgroundColor: loading ? '#cccccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Loading...' : 'データを更新'}
      </button>

      {error && (
        <div style={{
          margin: '10px',
          padding: '10px',
          border: '1px solid #ff0000',
          backgroundColor: '#ffebee',
          color: '#d32f2f'
        }}>
          {error}
        </div>
      )}

      <div style={{ margin: '20px' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#f5f5f5',
              borderBottom: '2px solid #ddd'
            }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>インスタンス名</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>インスタンスID</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>状態</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>リージョン</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>起動時刻</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>ストレージ(GB)</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>自動起動/停止</th>
            </tr>
          </thead>
          <tbody>
            {instances.map((instance, index) => (
              <tr key={instance.instanceId} style={{
                borderBottom: '1px solid #ddd',
                backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9'
              }}>
                <td style={{ padding: '12px' }}>
                  {instance.instanceName || instance.instanceId}
                </td>
                <td style={{ padding: '12px' }}>{instance.instanceId}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: getStateColor(instance.state),
                    color: 'white',
                    fontSize: '0.9em'
                  }}>
                    {instance.state}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>{instance.region}</td>
                <td style={{ padding: '12px' }}>{formatDateTime(instance.launchTime)}</td>
                <td style={{ padding: '12px' }}>{instance.totalStorage}</td>
                <td style={{ padding: '12px' }}>
                  {instance.autoStartStop ? '有効' : '無効'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {instances.length === 0 && !loading && !error && (
          <div style={{
            padding: '20px',
            textAlign: 'center',
            color: '#666'
          }}>
            インスタンスが見つかりません
          </div>
        )}
      </div>
    </div>
  );
};

export default InstanceManagement;