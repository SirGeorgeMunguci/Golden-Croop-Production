import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { storage } from '../utils/storage';
import { Lightbulb, Save } from 'lucide-react';

const ICan = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    skills: '',
    whatICanDo: '',
    bio: '',
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user) {
      const iCanData = storage.getICanData(user.id);
      if (iCanData) {
        setFormData({
          skills: iCanData.skills || '',
          whatICanDo: iCanData.whatICanDo || '',
          bio: iCanData.bio || '',
        });
      }
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      userId: user.id,
      ...formData,
      updatedAt: new Date().toISOString(),
    };

    storage.saveICanData(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl w-full">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">I CAN</h1>
        <p className="text-gray-600">Tell us about your skills and capabilities</p>
      </div>

      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Your Capabilities</h2>
            <p className="text-sm text-gray-600">Share what you can do</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              rows={4}
              className="input-field"
              placeholder="List your skills (e.g., Sales, Negotiation, Customer Service, etc.)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What I Can Do
            </label>
            <textarea
              name="whatICanDo"
              value={formData.whatICanDo}
              onChange={handleChange}
              rows={4}
              className="input-field"
              placeholder="Describe what you can do and your areas of expertise..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={6}
              className="input-field"
              placeholder="Write a short bio about yourself..."
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            {saved && (
              <p className="text-green-600 text-sm">Information saved successfully!</p>
            )}
            <button type="submit" className="btn-primary ml-auto flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ICan;

