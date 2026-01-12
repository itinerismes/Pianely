#!/usr/bin/env python3
"""
Python Basic Pitch Transcription Service
Converts audio files to MIDI using Spotify's Basic Pitch model

Usage:
    python transcribe_service.py <input_audio_file> <output_midi_file>
"""

import sys
import os
from basic_pitch.inference import predict
from basic_pitch import ICASSP_2022_MODEL_PATH

def transcribe_audio_to_midi(input_path, output_path):
    """
    Transcribe an audio file to MIDI using Basic Pitch
    
    Args:
        input_path: Path to input audio file (WAV, MP3, etc.)
        output_path: Path for output MIDI file
    
    Returns:
        dict: Transcription metadata (note count, duration, etc.)
    """
    try:
        print(f"🎵 Starting transcription: {input_path}")
        
        # Run Basic Pitch inference
        model_output, midi_data, note_events = predict(
            input_path,
            ICASSP_2022_MODEL_PATH,
            onset_threshold=0.5,
            frame_threshold=0.3,
            minimum_note_length=127.70,  # ~58ms
            minimum_frequency=None,
            maximum_frequency=None,
            multiple_pitch_bends=False,
            melodia_trick=True,
            debug_file=None
        )
        
        # Write MIDI file
        midi_data.write(output_path)
        
        # Calculate stats
        note_count = len(note_events)
        duration = max([note[1] for note in note_events]) if note_events else 0
        
        print(f"✅ Transcription complete!")
        print(f"   - Notes detected: {note_count}")
        print(f"   - Duration: {duration:.2f}s")
        print(f"   - Output: {output_path}")
        
        return {
            "success": True,
            "note_count": note_count,
            "duration": duration,
            "output_path": output_path
        }
        
    except Exception as e:
        print(f"❌ Transcription error: {str(e)}", file=sys.stderr)
        return {
            "success": False,
            "error": str(e)
        }

def main():
    if len(sys.argv) != 3:
        print("Usage: python transcribe_service.py <input_audio> <output_midi>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    if not os.path.exists(input_file):
        print(f"Error: Input file not found: {input_file}", file=sys.stderr)
        sys.exit(1)
    
    result = transcribe_audio_to_midi(input_file, output_file)
    
    if not result["success"]:
        sys.exit(1)
    
    print(f"\n🎹 MIDI file created: {output_file}")

if __name__ == "__main__":
    main()
