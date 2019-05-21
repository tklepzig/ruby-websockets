#!/usr/bin/env ruby

class String
  def bla
    p "huhu #{self}"
  end
end

class MegaGreeter
  attr_accessor :names

  # Erzeuge das Objekt
  def initialize(names = 'Welt')
    @names = names
  end

  # Sag Hallo zu allen
  def sag_hallo
    if @names.nil?
      puts '...'
    elsif @names.respond_to?('each')
      blubb = ->(name) { puts "Hallo 2, #{name}!" }
      blubb2 = lambda do |name|
        puts "Hallo 3, #{name}!"
      end
      # @names ist eine Liste, durchlaufe sie!
      @names.each(&:bla)
    else
      puts "Hallo, #{@names}!"
    end
  end

  # Sag Tschuess zu allen
  def sag_tschuess
    if @names.nil?
      puts '...'
    elsif @names.respond_to?('join')
      # Verbinde die Listenelemente mit einem Komma
      puts "Tschuess, #{@names.join(', ')}, bis bald!"
    else
      puts "Tschuess, #{@names}, bis bald!"
    end
  end
end

class Integer
  def reverse
    to_s.reverse
  end
end

if $PROGRAM_NAME == __FILE__
  mg = MegaGreeter.new
  mg.sag_hallo
  mg.sag_tschuess

  # Aendere den Namen in "Maximilian"
  mg.names = 'Maximilian'
  mg.sag_hallo
  mg.sag_tschuess

  # Aendere den Namen in ein Array von Namen
  mg.names = ['Albert', 'Bianca', 'Carl-Heinz',
              'David', 'Engelbert']
  mg.sag_hallo
  mg.sag_tschuess

  # Aendere in nil
  mg.names = nil
  mg.sag_hallo
  mg.sag_tschuess
  p 40.reverse
end
