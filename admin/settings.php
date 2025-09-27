<?php
// admin/settings.php - Settings
$page_title = 'Settings';
$page_subtitle = 'Configure your website and store settings';
$breadcrumb_items = [
    ['title' => 'Admin'],
    ['title' => 'Settings', 'active' => true]
];
$page_actions = '<button class="btn btn--success" id="save-all-settings"><i class="fas fa-save"></i> Save All Changes</button>';

include __DIR__ . '/header.php';
?>

<div class="settings-container">
    <!-- Settings Navigation Tabs -->
    <div class="settings-tabs">
        <button class="settings-tab active" data-tab="general">
            <i class="fas fa-cog"></i>
            <span>General</span>
        </button>
        <button class="settings-tab" data-tab="payment">
            <i class="fas fa-credit-card"></i>
            <span>Payment</span>
        </button>
        <button class="settings-tab" data-tab="shipping">
            <i class="fas fa-shipping-fast"></i>
            <span>Shipping</span>
        </button>
        <button class="settings-tab" data-tab="notifications">
            <i class="fas fa-bell"></i>
            <span>Notifications</span>
        </button>
    </div>

    <!-- Settings Content -->
    <div class="settings-content">
        <!-- General Settings Tab -->
        <div class="settings-panel active" id="general-panel">
            <div class="settings-header">
                <h3><i class="fas fa-cog"></i> General Settings</h3>
                <p>Configure basic website and store information</p>
            </div>
            
            <form class="settings-form" id="general-form">
                <div class="settings-section">
                    <h4>Website Information</h4>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="site-name">Website Name</label>
                            <input type="text" id="site-name" name="site_name" value="Viaenterprise" placeholder="Enter website name">
                        </div>
                        <div class="form-group">
                            <label for="site-tagline">Tagline</label>
                            <input type="text" id="site-tagline" name="site_tagline" value="Your Premium Fashion Destination" placeholder="Enter website tagline">
                        </div>
                        <div class="form-group full-width">
                            <label for="site-description">Description</label>
                            <textarea id="site-description" name="site_description" rows="3" placeholder="Enter website description">Discover premium fashion and accessories at Viaenterprise. Quality products, exceptional service.</textarea>
                        </div>
                    </div>
                </div>

                <div class="settings-section">
                    <h4>Logo & Branding</h4>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="site-logo">Website Logo</label>
                            <div class="file-upload-container">
                                <input type="file" id="site-logo" name="site_logo" accept="image/*" class="file-input">
                                <div class="file-upload-preview">
                                    <img src="../assets/images/logo.png" alt="Current Logo" class="logo-preview">
                                    <div class="upload-overlay">
                                        <i class="fas fa-camera"></i>
                                        <span>Change Logo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="favicon">Favicon</label>
                            <div class="file-upload-container small">
                                <input type="file" id="favicon" name="favicon" accept="image/*" class="file-input">
                                <div class="file-upload-preview">
                                    <img src="../assets/images/favicon.ico" alt="Current Favicon" class="favicon-preview">
                                    <div class="upload-overlay">
                                        <i class="fas fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="settings-section">
                    <h4>Contact Information</h4>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="contact-email">Contact Email</label>
                            <input type="email" id="contact-email" name="contact_email" value="info@viaenterprise.com" placeholder="Enter contact email">
                        </div>
                        <div class="form-group">
                            <label for="contact-phone">Phone Number</label>
                            <input type="tel" id="contact-phone" name="contact_phone" value="+1 (555) 123-4567" placeholder="Enter phone number">
                        </div>
                        <div class="form-group full-width">
                            <label for="contact-address">Address</label>
                            <textarea id="contact-address" name="contact_address" rows="2" placeholder="Enter business address">123 Fashion Street, Style City, SC 12345</textarea>
                        </div>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-save"></i> Save General Settings
                    </button>
                </div>
            </form>
        </div>

        <!-- Payment Settings Tab -->
        <div class="settings-panel" id="payment-panel">
            <div class="settings-header">
                <h3><i class="fas fa-credit-card"></i> Payment Settings</h3>
                <p>Configure payment methods and processing options</p>
            </div>
            
            <form class="settings-form" id="payment-form">
                <div class="settings-section">
                    <h4>Payment Methods</h4>
                    <div class="payment-methods-grid">
                        <div class="payment-method-card">
                            <div class="payment-method-header">
                                <div class="payment-method-info">
                                    <i class="fab fa-cc-stripe"></i>
                                    <span>Stripe</span>
                                </div>
                                <label class="toggle-switch">
                                    <input type="checkbox" name="stripe_enabled" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="payment-method-fields">
                                <div class="form-group">
                                    <label for="stripe-public-key">Public Key</label>
                                    <input type="text" id="stripe-public-key" name="stripe_public_key" placeholder="pk_test_...">
                                </div>
                                <div class="form-group">
                                    <label for="stripe-secret-key">Secret Key</label>
                                    <input type="password" id="stripe-secret-key" name="stripe_secret_key" placeholder="sk_test_...">
                                </div>
                            </div>
                        </div>

                        <div class="payment-method-card">
                            <div class="payment-method-header">
                                <div class="payment-method-info">
                                    <i class="fab fa-paypal"></i>
                                    <span>PayPal</span>
                                </div>
                                <label class="toggle-switch">
                                    <input type="checkbox" name="paypal_enabled">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="payment-method-fields">
                                <div class="form-group">
                                    <label for="paypal-client-id">Client ID</label>
                                    <input type="text" id="paypal-client-id" name="paypal_client_id" placeholder="Enter PayPal Client ID">
                                </div>
                                <div class="form-group">
                                    <label for="paypal-client-secret">Client Secret</label>
                                    <input type="password" id="paypal-client-secret" name="paypal_client_secret" placeholder="Enter PayPal Client Secret">
                                </div>
                            </div>
                        </div>

                        <div class="payment-method-card">
                            <div class="payment-method-header">
                                <div class="payment-method-info">
                                    <i class="fas fa-university"></i>
                                    <span>Bank Transfer</span>
                                </div>
                                <label class="toggle-switch">
                                    <input type="checkbox" name="bank_transfer_enabled" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="payment-method-fields">
                                <div class="form-group">
                                    <label for="bank-name">Bank Name</label>
                                    <input type="text" id="bank-name" name="bank_name" placeholder="Enter bank name">
                                </div>
                                <div class="form-group">
                                    <label for="account-number">Account Number</label>
                                    <input type="text" id="account-number" name="account_number" placeholder="Enter account number">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="settings-section">
                    <h4>Currency Settings</h4>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="default-currency">Default Currency</label>
                            <select id="default-currency" name="default_currency">
                                <option value="USD">USD - US Dollar</option>
                                <option value="EUR">EUR - Euro</option>
                                <option value="GBP">GBP - British Pound</option>
                                <option value="INR" selected>INR - Indian Rupee</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="currency-position">Currency Position</label>
                            <select id="currency-position" name="currency_position">
                                <option value="before">Before amount (₹100)</option>
                                <option value="after">After amount (100₹)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-save"></i> Save Payment Settings
                    </button>
                </div>
            </form>
        </div>

        <!-- Shipping Settings Tab -->
        <div class="settings-panel" id="shipping-panel">
            <div class="settings-header">
                <h3><i class="fas fa-shipping-fast"></i> Shipping Settings</h3>
                <p>Configure shipping methods and delivery options</p>
            </div>
            
            <form class="settings-form" id="shipping-form">
                <div class="settings-section">
                    <h4>Shipping Zones</h4>
                    <div class="shipping-zones">
                        <div class="shipping-zone-card">
                            <div class="zone-header">
                                <h5>Domestic Shipping</h5>
                                <label class="toggle-switch">
                                    <input type="checkbox" name="domestic_shipping" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="zone-content">
                                <div class="form-grid">
                                    <div class="form-group">
                                        <label for="domestic-rate">Shipping Rate</label>
                                        <input type="number" id="domestic-rate" name="domestic_rate" value="50" placeholder="0">
                                    </div>
                                    <div class="form-group">
                                        <label for="domestic-free-threshold">Free Shipping Above</label>
                                        <input type="number" id="domestic-free-threshold" name="domestic_free_threshold" value="999" placeholder="0">
                                    </div>
                                    <div class="form-group">
                                        <label for="domestic-delivery-time">Delivery Time</label>
                                        <input type="text" id="domestic-delivery-time" name="domestic_delivery_time" value="2-5 business days" placeholder="Enter delivery time">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="shipping-zone-card">
                            <div class="zone-header">
                                <h5>International Shipping</h5>
                                <label class="toggle-switch">
                                    <input type="checkbox" name="international_shipping">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="zone-content">
                                <div class="form-grid">
                                    <div class="form-group">
                                        <label for="international-rate">Shipping Rate</label>
                                        <input type="number" id="international-rate" name="international_rate" value="200" placeholder="0">
                                    </div>
                                    <div class="form-group">
                                        <label for="international-free-threshold">Free Shipping Above</label>
                                        <input type="number" id="international-free-threshold" name="international_free_threshold" value="2999" placeholder="0">
                                    </div>
                                    <div class="form-group">
                                        <label for="international-delivery-time">Delivery Time</label>
                                        <input type="text" id="international-delivery-time" name="international_delivery_time" value="7-14 business days" placeholder="Enter delivery time">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="settings-section">
                    <h4>Shipping Options</h4>
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" name="enable_tracking" checked>
                                <span class="checkmark"></span>
                                Enable order tracking
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" name="require_signature">
                                <span class="checkmark"></span>
                                Require signature on delivery
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" name="insurance_available" checked>
                                <span class="checkmark"></span>
                                Offer shipping insurance
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-save"></i> Save Shipping Settings
                    </button>
                </div>
            </form>
        </div>

        <!-- Notifications Settings Tab -->
        <div class="settings-panel" id="notifications-panel">
            <div class="settings-header">
                <h3><i class="fas fa-bell"></i> Notification Settings</h3>
                <p>Configure email notifications and alerts</p>
            </div>
            
            <form class="settings-form" id="notifications-form">
                <div class="settings-section">
                    <h4>Email Notifications</h4>
                    <div class="notification-groups">
                        <div class="notification-group">
                            <h5>Order Notifications</h5>
                            <div class="notification-options">
                                <label class="checkbox-label">
                                    <input type="checkbox" name="notify_new_order" checked>
                                    <span class="checkmark"></span>
                                    New order received
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="notify_order_status" checked>
                                    <span class="checkmark"></span>
                                    Order status changes
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="notify_payment_received" checked>
                                    <span class="checkmark"></span>
                                    Payment received
                                </label>
                            </div>
                        </div>

                        <div class="notification-group">
                            <h5>Inventory Notifications</h5>
                            <div class="notification-options">
                                <label class="checkbox-label">
                                    <input type="checkbox" name="notify_low_stock" checked>
                                    <span class="checkmark"></span>
                                    Low stock alerts
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="notify_out_of_stock" checked>
                                    <span class="checkmark"></span>
                                    Out of stock alerts
                                </label>
                                <div class="form-group inline">
                                    <label for="low-stock-threshold">Low stock threshold</label>
                                    <input type="number" id="low-stock-threshold" name="low_stock_threshold" value="5" min="1">
                                </div>
                            </div>
                        </div>

                        <div class="notification-group">
                            <h5>Customer Notifications</h5>
                            <div class="notification-options">
                                <label class="checkbox-label">
                                    <input type="checkbox" name="notify_new_customer" checked>
                                    <span class="checkmark"></span>
                                    New customer registration
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="notify_customer_review">
                                    <span class="checkmark"></span>
                                    New product reviews
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="notify_customer_inquiry" checked>
                                    <span class="checkmark"></span>
                                    Customer inquiries
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="settings-section">
                    <h4>Email Configuration</h4>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="smtp-host">SMTP Host</label>
                            <input type="text" id="smtp-host" name="smtp_host" placeholder="smtp.gmail.com">
                        </div>
                        <div class="form-group">
                            <label for="smtp-port">SMTP Port</label>
                            <input type="number" id="smtp-port" name="smtp_port" value="587" placeholder="587">
                        </div>
                        <div class="form-group">
                            <label for="smtp-username">SMTP Username</label>
                            <input type="email" id="smtp-username" name="smtp_username" placeholder="your-email@gmail.com">
                        </div>
                        <div class="form-group">
                            <label for="smtp-password">SMTP Password</label>
                            <input type="password" id="smtp-password" name="smtp_password" placeholder="Enter SMTP password">
                        </div>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-save"></i> Save Notification Settings
                    </button>
                    <button type="button" class="btn btn--secondary" id="test-email">
                        <i class="fas fa-paper-plane"></i> Send Test Email
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php include __DIR__ . '/footer.php'; ?>
