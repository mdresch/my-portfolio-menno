"use client";

import { useState } from 'react';
import { generateAIResponse, generateAIResponseDirect, availableModels } from '@/lib/firebase';

interface AIExample {
  title: string;
  description: string;
  prompt: string;
  category: 'creative' | 'analytical' | 'technical' | 'conversational';
}

const FirebaseAIShowcase = () => {  const [selectedExample, setSelectedExample] = useState<AIExample | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gemini-2.0-flash');
  const [useDirectAPI, setUseDirectAPI] = useState(true);

  const aiExamples: AIExample[] = [
    {
      title: "Code Review Assistant",
      description: "Analyze and improve code quality",
      prompt: "Review this JavaScript function and suggest improvements:\n\nfunction calculateTotal(items) {\n  let total = 0;\n  for (let i = 0; i < items.length; i++) {\n    total += items[i].price * items[i].quantity;\n  }\n  return total;\n}",
      category: 'technical'
    },
    {
      title: "Creative Writing",
      description: "Generate creative content and stories",
      prompt: "Write a short story about a developer who discovers their code has gained consciousness and is trying to communicate with them through error messages.",
      category: 'creative'
    },
    {
      title: "Data Analysis",
      description: "Analyze data patterns and insights",
      prompt: "Analyze this sales data and provide insights:\nQ1: $125,000, Q2: $145,000, Q3: $132,000, Q4: $178,000\nWhat trends do you see and what recommendations would you make?",
      category: 'analytical'
    },
    {
      title: "Problem Solving",
      description: "Break down complex problems",
      prompt: "Help me design a system architecture for a real-time chat application that needs to handle 10,000 concurrent users. What components would I need and how would they interact?",
      category: 'technical'
    },
    {
      title: "Content Strategy",
      description: "Marketing and content planning",
      prompt: "Create a content marketing strategy for a new portfolio website targeting potential clients in the tech industry. Include 5 blog post ideas and social media approaches.",
      category: 'analytical'
    },
    {
      title: "Casual Conversation",
      description: "Natural, friendly interactions",
      prompt: "I'm feeling overwhelmed with my current project. Can you help me break it down into manageable tasks and provide some motivation?",
      category: 'conversational'
    }
  ];
  const handleGenerateResponse = async (promptText: string) => {
    setIsLoading(true);
    try {
      let result;
      if (useDirectAPI) {
        // Use direct Firebase AI SDK - client-side call
        result = await generateAIResponseDirect(promptText, selectedModel);
      } else {
        // Use API route - server-side call
        result = await generateAIResponse(promptText, selectedModel);
      }
      setResponse(result);
    } catch (error) {
      console.error('Error generating response:', error);
      setResponse('Error generating response. Please check your Firebase configuration and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const categories = {
    creative: { name: 'Creative', color: 'from-purple-500 to-pink-500', icon: '🎨' },
    analytical: { name: 'Analytical', color: 'from-blue-500 to-cyan-500', icon: '📊' },
    technical: { name: 'Technical', color: 'from-green-500 to-teal-500', icon: '⚙️' },
    conversational: { name: 'Conversational', color: 'from-orange-500 to-red-500', icon: '💬' }
  };

  return (
    <div className="space-y-8">      {/* Model Selection */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">AI Model Configuration</h3>        
        
        {/* API Method Toggle */}
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">API Method:</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="apiMethod"
                checked={useDirectAPI}
                onChange={() => setUseDirectAPI(true)}
                className="text-purple-500 focus:ring-purple-500"
              />
              <span className="text-white">Direct Firebase AI (Client-side)</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="apiMethod"
                checked={!useDirectAPI}
                onChange={() => setUseDirectAPI(false)}
                className="text-purple-500 focus:ring-purple-500"
              />
              <span className="text-white">API Route (Server-side)</span>
            </label>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            {useDirectAPI ? 
              "Uses Firebase AI SDK directly in the browser for faster responses" : 
              "Routes through Next.js API for server-side processing"
            }
          </p>
        </div>

        {/* Model Selection */}
        <div>
          <label className="block text-white font-medium mb-2">Model:</label>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            aria-label="Select AI Model for Showcase"
            className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {availableModels.map((modelName) => (
              <option key={modelName} value={modelName} className="text-black">
                {modelName.replace('-', ' ').replace('exp', 'Experimental')}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Example Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(categories).map(([key, category]) => (
          <div key={key} className={`bg-gradient-to-r ${category.color} rounded-lg p-4 text-white text-center`}>
            <div className="text-2xl mb-2">{category.icon}</div>
            <div className="font-semibold">{category.name}</div>
            <div className="text-sm opacity-80">
              {aiExamples.filter(ex => ex.category === key).length} examples
            </div>
          </div>
        ))}
      </div>

      {/* AI Examples Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiExamples.map((example, index) => (
          <div
            key={index}
            onClick={() => setSelectedExample(example)}
            className={`bg-white/10 backdrop-blur-md rounded-lg p-6 cursor-pointer transition-all duration-200 hover:bg-white/20 border-2 ${
              selectedExample === example ? 'border-purple-500' : 'border-transparent'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{categories[example.category].icon}</span>
              <h4 className="text-white font-semibold">{example.title}</h4>
            </div>
            <p className="text-slate-300 text-sm mb-3">{example.description}</p>
            <div className={`inline-block px-3 py-1 rounded-full text-xs text-white bg-gradient-to-r ${categories[example.category].color}`}>
              {categories[example.category].name}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Example or Custom Input */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
        <div className="flex flex-col space-y-4">
          {selectedExample ? (
            <div>
              <h3 className="text-white font-semibold mb-2">Selected Example: {selectedExample.title}</h3>
              <div className="bg-black/30 rounded-lg p-4 text-slate-300 text-sm mb-4">
                {selectedExample.prompt}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleGenerateResponse(selectedExample.prompt)}
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isLoading ? 'Generating...' : 'Run Example'}
                </button>
                <button
                  onClick={() => setSelectedExample(null)}
                  className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-200"
                >
                  Clear
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-white font-semibold mb-2">Custom Prompt</h3>
              <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Enter your custom prompt here..."
                className="w-full h-32 p-4 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <button
                onClick={() => handleGenerateResponse(customPrompt)}
                disabled={isLoading || !customPrompt.trim()}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? 'Generating...' : 'Generate Response'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Response Section */}
      {response && (
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
          <h3 className="text-white font-semibold mb-3">AI Response:</h3>
          <div className="bg-black/30 rounded-lg p-4 text-white/90 whitespace-pre-wrap text-sm max-h-96 overflow-y-auto">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default FirebaseAIShowcase;
