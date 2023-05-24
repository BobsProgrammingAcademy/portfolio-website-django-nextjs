from django.db import models


class Testimonial(models.Model):
  testimonial = models.CharField(max_length=300)
  author_name = models.CharField(max_length=100)
  author_title = models.CharField(max_length=100)
  author_photo = models.ImageField(upload_to='images')

  class Meta:
    verbose_name = 'Testimonial'
    verbose_name_plural = 'Testimonials'

  def __str__(self):
    return self.author_name
