using System;
using System.Drawing;
using System.Runtime.InteropServices;
using System.Windows.Forms;

namespace resume
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;
        #region draggable title bar
        public const int WM_NCLBUTTONDOWN = 0xA1;
        public const int HTCAPTION = 0x2;
        [DllImport("User32.dll")]
        public static extern bool ReleaseCapture();
        [DllImport("User32.dll")]
        public static extern int SendMessage(IntPtr hWnd, int Msg, int wParam, int lParam);
        private void GrpHeaderOnMouseDown(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                ReleaseCapture();
                SendMessage(Handle, WM_NCLBUTTONDOWN, HTCAPTION, 0);
            }
        }
        #endregion
        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }
        private void PaintBorderlessGrpHeader(object sender, PaintEventArgs p)
        {
            GroupBox box = (GroupBox)sender;
            SizeF strSize = p.Graphics.MeasureString(box.Text, box.Font);
            Rectangle dim = new Rectangle(box.ClientRectangle.X, box.ClientRectangle.Y + (int)(strSize.Height / 2), box.ClientRectangle.Width - 1, box.ClientRectangle.Height - (int)(strSize.Height / 2) - 1);
            p.Graphics.Clear(this.BackColor);
            p.Graphics.DrawString(box.Text, box.Font, Brushes.Black, 0, 0);
            p.Graphics.DrawLine(new Pen(new SolidBrush(Color.FromArgb(195, 12, 42))), new Point(dim.X, dim.Y + dim.Height), new Point(dim.X + dim.Width, dim.Y + dim.Height));
        }
        private void PaintBorderlessBtnHeaderExit(object sender, PaintEventArgs p)
        {
            Button btn = (Button)sender;
            SizeF strSize = p.Graphics.MeasureString(btn.Text, btn.Font);
            p.Graphics.Clear(this.BackColor);
            p.Graphics.DrawString(btn.Text, btn.Font, new SolidBrush(Color.FromArgb(195, 12, 42)), 0, 0);
        }
        private void BtnHeaderExit_Click(object sender, EventArgs e) { Close(); }
        private void BtnHeaderExit_MouseHover(object sender, EventArgs e)
        {
            Button triggered = (Button)sender;
            triggered.UseVisualStyleBackColor = false;
            triggered.BackColor = Color.DarkGray;
        }
        private void BtnHeaderExit_MouseLeave(object sender, EventArgs e)
        {
            Button triggered = (Button)sender;
            triggered.UseVisualStyleBackColor = true;
            triggered.BackColor = Color.Black;
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.grpHeader = new System.Windows.Forms.GroupBox();
            this.btnHeaderExit = new System.Windows.Forms.Button();
            this.lblTitleName = new System.Windows.Forms.Label();
            this.grpHeader.SuspendLayout();
            this.SuspendLayout();
            // 
            // grpHeader
            // 
            this.grpHeader.BackColor = System.Drawing.SystemColors.Desktop;
            this.grpHeader.Controls.Add(this.btnHeaderExit);
            this.grpHeader.Controls.Add(this.lblTitleName);
            this.grpHeader.ForeColor = System.Drawing.SystemColors.ControlDarkDark;
            this.grpHeader.Location = new System.Drawing.Point(-6, -7);
            this.grpHeader.Name = "grpHeader";
            this.grpHeader.Size = new System.Drawing.Size(1165, 42);
            this.grpHeader.TabIndex = 0;
            this.grpHeader.TabStop = false;
            // 
            // btnHeaderExit
            // 
            this.btnHeaderExit.BackColor = System.Drawing.Color.Black;
            this.btnHeaderExit.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnHeaderExit.ForeColor = System.Drawing.Color.DarkGray;
            this.btnHeaderExit.Location = new System.Drawing.Point(1123, 7);
            this.btnHeaderExit.Name = "btnHeaderExit";
            this.btnHeaderExit.Size = new System.Drawing.Size(37, 32);
            this.btnHeaderExit.TabIndex = 1;
            this.btnHeaderExit.Text = "X";
            this.btnHeaderExit.UseVisualStyleBackColor = false;
            // 
            // lblTitleName
            // 
            this.lblTitleName.AutoSize = true;
            this.lblTitleName.Font = new System.Drawing.Font("Nirmala UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitleName.ForeColor = System.Drawing.SystemColors.Window;
            this.lblTitleName.Location = new System.Drawing.Point(18, 6);
            this.lblTitleName.Name = "lblTitleName";
            this.lblTitleName.Size = new System.Drawing.Size(164, 32);
            this.lblTitleName.TabIndex = 0;
            this.lblTitleName.Text = "Andrew Miller";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Desktop;
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(1149, 649);
            this.Controls.Add(this.grpHeader);
            this.DoubleBuffered = true;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Form1";
            this.Text = "Form1";
            this.grpHeader.ResumeLayout(false);
            this.grpHeader.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox grpHeader;
        private System.Windows.Forms.Label lblTitleName;
        private Button btnHeaderExit;
    }
}

