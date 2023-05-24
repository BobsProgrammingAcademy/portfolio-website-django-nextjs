from rest_framework import serializers
from .models import Testimonial


class TestimonialSerializer(serializers.ModelSerializer):
  class Meta:
    model = Testimonial
    fields = '__all__'
