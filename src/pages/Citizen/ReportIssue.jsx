import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  ImagePlus,
  MapPin,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import LocationPicker from "../../components/map/LocationPicker";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function ReportIssue() {
 const [formData, setFormData] = useState({
  title: "",
  category: "",
  priority: "Medium",
  description: "",
});
const [showSuccessModal, setShowSuccessModal] = useState(false);
const [selectedImages, setSelectedImages] = useState([]);
const [selectedLocation, setSelectedLocation] = useState([
  28.6139,
  77.2090,
]);

const handleImageSelect = (e) => {
  const files = Array.from(e.target.files);

  const imageFiles = files
    .filter((file) => file.type.startsWith("image/"))
    .slice(0, 5);

  setSelectedImages(imageFiles);
};

const handleDrop = (e) => {
  e.preventDefault();

  const files = Array.from(e.dataTransfer.files);

  const imageFiles = files
    .filter((file) => file.type.startsWith("image/"))
    .slice(0, 5);

  setSelectedImages(imageFiles);
};

const hasReportContent =

  formData.title.trim().length > 0 ||
  formData.description.trim().length > 0;
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.title.trim()) {
    alert("Please enter an issue title.");
    return;
  }

  if (!formData.category) {
    alert("Please select an issue category.");
    return;
  }

  if (!formData.description.trim()) {
    alert("Please describe the issue.");
    return;
  }

const reportData = {
  ...formData,
  location: {
    latitude: selectedLocation[0],
    longitude: selectedLocation[1],
  },
  images: selectedImages,
};

console.log("Report submitted:", reportData);

setShowSuccessModal(true);
};

  return (
    <div className="report-page">
      <div className="report-page-container">

        {/* Header */}
        <motion.div
          className="report-page-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <Link to="/dashboard" className="back-to-dashboard">
              <ArrowLeft size={15} />
              Back to dashboard
            </Link>

            <span className="report-page-kicker">
              <span></span>
              REPORT A CIVIC ISSUE
            </span>

            <h1>Tell us what's happening.</h1>

            <p>
              Provide a few details and we'll help route your issue
              to the right department.
            </p>
          </div>

          <div className="report-ai-badge">
            <Sparkles size={17} />
            <span>AI-assisted reporting</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="report-form-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="report-form-section">
            <div className="form-section-heading">
              <div className="form-section-number">01</div>

              <div>
                <h2>Issue details</h2>
                <p>Tell us about the problem.</p>
              </div>
            </div>

            <div className="form-grid">

              <div className="form-field full-width">
                <label>
                  Issue title
                  <span>*</span>
                </label>

     <input
  type="text"
  placeholder="e.g. Large pothole on main road"
  value={formData.title}
  onChange={(e) =>
    setFormData({
      ...formData,
      title: e.target.value,
    })
  }
/>
              </div>

              <div className="form-field">
                <label>
                  Category
                  <span>*</span>
                </label>

               <select
  value={formData.category}
  onChange={(e) =>
    setFormData({
      ...formData,
      category: e.target.value,
    })
  }
>
  <option value="">Select category</option>
  <option value="Road Damage">Road Damage</option>
  <option value="Streetlight">Streetlight</option>
  <option value="Garbage">Garbage</option>
  <option value="Water & Drainage">Water & Drainage</option>
  <option value="Public Infrastructure">Public Infrastructure</option>
  <option value="Other">Other</option>
</select>
              </div>

              <div className="form-field">
                <label>
                  Priority
                </label>

                <select
  value={formData.priority}
  onChange={(e) =>
    setFormData({
      ...formData,
      priority: e.target.value,
    })
  }
>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
  <option value="Critical">Critical</option>
</select>

                <small>
                  AI can suggest priority based on the issue.
                </small>
              </div>

              <div className="form-field full-width">
                <label>
                  Description
                  <span>*</span>
                </label>

                <textarea
  rows="5"
  placeholder="Describe what happened, how serious it is, and anything else that could help..."
  value={formData.description}
  onChange={(e) =>
    setFormData({
      ...formData,
      description: e.target.value,
    })
  }
/>

                <div className="textarea-footer">
                  <span>
                    <FileText size={13} />
                    Be as specific as possible
                  </span>

                  <small>{formData.description.length} / 500</small>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="report-form-section">
            <div className="form-section-heading">
              <div className="form-section-number">02</div>

              <div>
                <h2>Issue location</h2>
                <p>Where is the problem located?</p>
              </div>
            </div>

            <div className="location-box">
              <div className="location-icon">
                <MapPin size={20} />
              </div>

              <div className="location-content">
                <strong>Delhi NCR</strong>
                <span>
                  Location will be detected or selected on the map.
                </span>
              </div>

              <button type="button" className="location-button">
                <MapPin size={15} />
                Select location
              </button>
            </div>

     <div className="location-map-preview">
  <LocationPicker
    onLocationSelect={setSelectedLocation}
  />
</div>

<div className="selected-location-info">
  <MapPin size={14} />

  <span>
    Selected location:
  </span>

  <strong>
    {selectedLocation[0].toFixed(5)},{" "}
    {selectedLocation[1].toFixed(5)}
  </strong>
</div>

          </div>

          {/* Photos */}
          <div className="report-form-section">
            <div className="form-section-heading">
              <div className="form-section-number">03</div>

              <div>
                <h2>Add photos</h2>
                <p>
                  Photos help verify and understand the issue.
                </p>
              </div>
            </div>

            <div
  className="upload-zone"
  onDragOver={(e) => e.preventDefault()}
  onDrop={handleDrop}
>
              <div className="upload-icon">
                <ImagePlus size={24} />
              </div>

              <h3>Upload photos</h3>

              <p>
                Drag and drop images here, or browse from your device.
              </p>

             <label className="upload-button">
  <Upload size={15} />
  Choose files

  <input
    type="file"
    accept="image/png,image/jpeg,image/webp"
    multiple
    hidden
    onChange={handleImageSelect}
  />
</label>

              <span className="upload-note">
                PNG, JPG or WEBP · Maximum 5 images
              </span>
            </div>
             
       {selectedImages.length > 0 && (
  <motion.div
    className="selected-images-grid"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
  >
    {selectedImages.map((file, index) => (
      <motion.div
        className="selected-image-card"
        key={`${file.name}-${index}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.08 }}
      >
        <img
          src={URL.createObjectURL(file)}
          alt={`Selected civic issue ${index + 1}`}
        />

        <button
          type="button"
          className="remove-image-button"
          onClick={() =>
            setSelectedImages(
              selectedImages.filter((_, imageIndex) => imageIndex !== index)
            )
          }
        >
          <X size={14} />
        </button>
      </motion.div>
    ))}
  </motion.div>
)}

            <div className="camera-option">
              <Camera size={16} />
              <span>You can also take a photo directly from your device.</span>
            </div>
          </div>

          {/* AI Preview */}
          <div className="ai-report-preview">
            <div className="ai-report-icon">
              <Sparkles size={20} />
            </div>

            <div>
              <strong>Smart report analysis</strong>

              <p>
  {hasReportContent
    ? "AI is ready to analyze your report for category, similar issues, and priority."
    : "Once you add your issue details, AI can help categorize your issue, detect similar reports, and suggest a priority."}
</p>
            </div>

            <div className="ai-checks">
              <span>
                <CheckCircle2 size={13} />
                Categorization
              </span>

              <span>
                <CheckCircle2 size={13} />
                Duplicate detection
              </span>

              <span>
                <CheckCircle2 size={13} />
                Priority suggestion
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="report-form-actions">
            <Link to="/dashboard" className="cancel-report-button">
              Cancel
            </Link>

           <button
  type="button"
  className="submit-report-button"
  onClick={handleSubmit}
>
  Submit report
  <ArrowRight size={17} />
</button>
          </div>

          <div className="report-security-note">
            <AlertCircle size={14} />
            Your report will be securely stored and visible in your
            report history.
          </div>
        </motion.div>
        {showSuccessModal && (
  <div className="success-modal-overlay">
    <motion.div
      className="success-modal"
      initial={{ opacity: 0, scale: 0.88, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
    >
      <button
        className="success-modal-close"
        onClick={() => setShowSuccessModal(false)}
        aria-label="Close"
      >
        ×
      </button>

      <div className="success-animation">
        <div className="success-glow"></div>
        <div className="success-circle">
          <CheckCircle2 size={58} strokeWidth={1.8} />
        </div>
      </div>

      <div className="success-sparkle sparkle-one">✦</div>
      <div className="success-sparkle sparkle-two">✦</div>
      <div className="success-sparkle sparkle-three">•</div>

      <h2>Report Submitted<br />Successfully!</h2>

      <h3>Thank you for making your city better!</h3>

      <p className="success-description">
        Your report has been received and will be reviewed
        by the relevant department.
      </p>

      <div className="success-progress">

        <div className="success-step">
          <div className="success-step-icon received">
            <FileText size={20} />
          </div>
          <span>Report<br />Received</span>
        </div>

        <div className="success-line"></div>

        <div className="success-step">
          <div className="success-step-icon review">
            <Sparkles size={20} />
          </div>
          <span>Under<br />Review</span>
        </div>

        <div className="success-line"></div>

        <div className="success-step">
          <div className="success-step-icon notify">
            <AlertCircle size={20} />
          </div>
          <span>You'll be<br />Notified</span>
        </div>

      </div>

      <button
        className="success-continue-button"
        onClick={() => setShowSuccessModal(false)}
      >
        Great! Continue
        <ArrowRight size={18} />
      </button>

      <div className="success-footer">
        Together for a cleaner, safer, and smarter city. ♥
      </div>

      <div className="success-cityscape">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.div>
  </div>
)}
      </div>
    </div>
  );
}

export default ReportIssue;